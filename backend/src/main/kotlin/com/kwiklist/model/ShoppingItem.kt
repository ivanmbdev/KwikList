package com.kwiklist.model

import com.fasterxml.jackson.annotation.JsonIgnore
import jakarta.persistence.*

@Entity
@Table(name = "shopping_items")
data class ShoppingItem(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    val id: String? = null,
    var name: String,
    var addedBy: String = "",
    var isCompleted: Boolean = false,
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "list_id")
    @JsonIgnore
    var shoppingList: ShoppingList? = null
)
