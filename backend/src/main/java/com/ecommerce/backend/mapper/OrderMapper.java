package com.ecommerce.backend.mapper;

import com.ecommerce.backend.dto.OrderDto;
import com.ecommerce.backend.entity.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    public OrderDto toDto(Order order) {
        if (order == null) return null;
        return OrderDto.builder()
                .id(order.getId())
                .userId(order.getUserId())
                .status(order.getStatus())
                .totalAmount(order.getTotalAmount())
                .paymentStatus(order.getPaymentStatus())
                .trackingNumber(order.getTrackingNumber())
                .createdAt(order.getCreatedAt())
                .build();
    }

    public Order toEntity(OrderDto dto) {
        if (dto == null) return null;
        return Order.builder()
                .id(dto.getId())
                .userId(dto.getUserId())
                .status(dto.getStatus() == null ? "PENDING" : dto.getStatus())
                .totalAmount(dto.getTotalAmount())
                .paymentStatus(dto.getPaymentStatus() == null ? "UNPAID" : dto.getPaymentStatus())
                .trackingNumber(dto.getTrackingNumber())
                .build();
    }
}
