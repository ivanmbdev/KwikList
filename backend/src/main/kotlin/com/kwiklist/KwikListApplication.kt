package com.kwiklist

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class KwikListApplication

fun main(args: Array<String>) {
    runApplication<KwikListApplication>(*args)
}
