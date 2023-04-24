package com.sola.gamebackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class GameController {
    @GetMapping("/game")
    public String getExample() {
        return "This is an example GET request.";
    }
}
