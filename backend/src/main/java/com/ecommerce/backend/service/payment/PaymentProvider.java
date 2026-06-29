package com.ecommerce.backend.service.payment;

public interface PaymentProvider {
    /**
     * Process a payment for a specific amount and order ID.
     * @param orderId the unique order identifier
     * @param amount the amount to charge
     * @param currency the currency code
     * @return a transaction identifier or payment intent ID
     */
    String processPayment(Long orderId, Double amount, String currency);

    /**
     * Verify a previously processed payment.
     * @param transactionId the transaction identifier
     * @return true if successful, false otherwise
     */
    boolean verifyPayment(String transactionId);

    /**
     * Issue a refund for a given transaction.
     * @param transactionId the transaction identifier
     * @param amount the amount to refund
     * @return true if refund was successful, false otherwise
     */
    boolean refundPayment(String transactionId, Double amount);

    /**
     * Identifies the provider name, e.g. "STRIPE", "RAZORPAY", "PAYPAL"
     * @return string identifier of the payment provider
     */
    String getProviderName();
}
