package com.ecommerce.backend.service;

import com.ecommerce.backend.dto.OrderDto;
import java.util.List;

public interface OrderService {
    OrderDto createOrder(OrderDto orderDto);
    OrderDto getOrderById(Long id);
    List<OrderDto> getAllOrders();
    List<OrderDto> getOrdersByUser(Long userId);
    OrderDto updateOrderStatus(Long id, String status);
}
