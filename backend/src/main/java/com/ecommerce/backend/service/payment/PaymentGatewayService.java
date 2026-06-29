package com.ecommerce.backend.service.payment;

import com.ecommerce.backend.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PaymentGatewayService {

    private final Map<String, PaymentProvider> providers = new HashMap<>();

    @Autowired
    public PaymentGatewayService(List<PaymentProvider> paymentProviderList) {
        for (PaymentProvider provider : paymentProviderList) {
            providers.put(provider.getProviderName().toUpperCase(), provider);
        }
    }

    public String processPayment(String providerName, Long orderId, Double amount, String currency) {
        PaymentProvider provider = providers.get(providerName.toUpperCase());
        if (provider == null) {
            throw new ResourceNotFoundException("PaymentProvider", "name", providerName);
        }
        return provider.processPayment(orderId, amount, currency);
    }
}
