;; Define the fungible token representing a loan
(define-fungible-token loan-ft)

;; Define a data map to store additional information about each loan
(define-map loan-data
  ((loan-id uint)) ;; key: the ID of the loan
  ( ;; value: the data associated with the loan
    (borrower principal) ;; the borrower of the loan
    (lender principal) ;; the lender of the loan
    (loan-amount uint) ;; the amount of the loan
    (interest-rate uint) ;; the interest rate of the loan
    (loan-status (string-ascii 20)) ;; the status of the loan
  )
)

;; Create a new loan
;; Only the contract owner can create new loans
(define-public (create-loan (loan-id uint) (borrower principal) (lender principal) (loan-amount uint) (interest-rate uint))
  (begin
    (asserts! (is-eq tx-sender (contract-call? .contract-owner get-owner)) (err u1)) ;; check that the sender is the contract owner
    (ft-mint? loan-ft loan-amount lender) ;; mint the loan
    (map-set loan-data ;; set the data for the loan
      { loan-id: loan-id }
      { borrower: borrower, lender: lender, loan-amount: loan-amount, interest-rate: interest-rate, loan-status: "pending" }
    )
    (ok loan-id)
  )
)

;; Approve a loan
;; Only the borrower can approve the loan
(define-public (approve-loan (loan-id uint))
  (begin
    (let ((loan (unwrap! (map-get? loan-data { loan-id: loan-id }) (err u2)))) ;; get the loan
      (asserts! (is-eq tx-sender (get borrower loan)) (err u3)) ;; check that the sender is the borrower
      (map-set loan-data ;; update the data for the loan
        { loan-id: loan-id }
        { borrower: (get borrower loan), lender: (get lender loan), loan-amount: (get loan-amount loan), interest-rate: (get interest-rate loan), loan-status: "approved" }
      )
      (ok loan-id)
    )
  )
)

;; Get the data for a loan
(define-read-only (get-loan-data (loan-id uint))
  (map-get? loan-data { loan-id: loan-id }) ;; get the data for the loan
)