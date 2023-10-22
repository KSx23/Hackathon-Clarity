;; Define a data map to store the sale offers
(define-map sale-offers
  ((token-id uint)) ;; key: the ID of the mortgage NFT
  ( ;; value: the data associated with the sale offer
    (seller principal) ;; the seller of the NFT
    (price uint) ;; the price of the NFT
  )
)

;; Create a sale offer
;; Only the owner of the NFT can create a sale offer
(define-public (create-sale-offer (token-id uint) (price uint))
  (begin
    (let ((owner (unwrap! (contract-call? .MortgageNFT get-owner token-id) (err u1)))) ;; get the owner of the NFT
      (asserts! (is-eq tx-sender owner) (err u2)) ;; check that the sender is the owner
      (map-set sale-offers ;; set the data for the sale offer
        { token-id: token-id }
        { seller: tx-sender, price: price }
      )
      (ok token-id)
    )
  )
)

;; Buy an NFT
;; Anyone can buy an NFT if they pay the price
(define-public (buy-nft (token-id uint))
  (begin
    (let ((offer (unwrap! (map-get? sale-offers { token-id: token-id }) (err u3)))) ;; get the sale offer
      (asserts! (>= (ft-get-balance .usd-token tx-sender) (get price offer)) (err u4)) ;; check that the sender has enough money
      (ft-transfer? .usd-token (get price offer) tx-sender (get seller offer)) ;; transfer the money
      (contract-call? .MortgageNFT transfer-mortgage token-id tx-sender) ;; transfer the NFT
      (map-delete sale-offers { token-id: token-id }) ;; delete the sale offer
      (ok token-id)
    )
  )
)

;; Get the data for a sale offer
(define-read-only (get-sale-offer (token-id uint))
  (map-get? sale-offers { token-id: token-id }) ;; get the data for the sale offer
)