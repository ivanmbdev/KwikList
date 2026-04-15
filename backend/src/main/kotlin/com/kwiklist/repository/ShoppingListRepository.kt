package com.kwiklist.repository

import com.kwiklist.model.ShoppingList
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ShoppingListRepository : JpaRepository<ShoppingList, String> {
    fun findByMembersContaining(memberId: String): List<ShoppingList>
}
