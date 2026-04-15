package com.kwiklist.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "shopping_lists")
data class ShoppingList(
    @Id @GeneratedValue(strategy = GenerationType.UUID)
    val id: String? = null,
    var name: String,
    var creatorId: String = "",
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "shopping_list_members", joinColumns = [JoinColumn(name = "list_id")])
    @Column(name = "member_id")
    var members: MutableSet<String> = mutableSetOf(),
    var createdAt: LocalDateTime = LocalDateTime.now(),
    @OneToMany(mappedBy = "shoppingList", cascade = [CascadeType.ALL], orphanRemoval = true)
    var items: MutableList<ShoppingItem> = mutableListOf()
)
