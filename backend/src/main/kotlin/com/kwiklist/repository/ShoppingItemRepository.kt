package com.kwiklist.repository

import com.kwiklist.model.ShoppingItem
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ShoppingItemRepository : JpaRepository<ShoppingItem, String>
