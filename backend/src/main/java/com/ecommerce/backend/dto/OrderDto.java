package com.ecommerce.backend.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDto {
    private Long id;
    private Long userId;
    private String status;
    private BigDecimal totalAmount;
    private String paymentStatus;
    private String trackingNumber;
    private LocalDateTime createdAt;
    
    // In a real app we'd map items here too
    // private List<OrderItemDto> items;
}
