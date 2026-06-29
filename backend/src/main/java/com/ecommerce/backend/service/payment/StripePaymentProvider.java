package com.ecommerce.backend.service.payment;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class StripePaymentProvider implements PaymentProvider {

    @Override
    public String processPayment(Long orderId, Double amount, String currency) {
        // Implementation for Stripe API
        return "pi_" + UUID.randomUUID().toString();
    }

    @Override
    public boolean verifyPayment(String transactionId) {
        // Verify via Stripe API
        return true;
    }

    @Override
    public boolean refundPayment(String transactionId, Double amount) {
        // Refund via Stripe API
        return true;
    }

    @Override
    public String getProviderName() {
        return "STRIPE";
    }
}
