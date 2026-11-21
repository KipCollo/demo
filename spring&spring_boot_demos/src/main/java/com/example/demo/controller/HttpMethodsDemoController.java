package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HttpMethodsDemoController {

    @RequestMapping(value="/home", method = RequestMethod.GET)
    @ResponseBody 
    public String getHome(){
        return "GET :: home";
    }

    @RequestMapping(value="/home", method = RequestMethod.POST)
    @ResponseBody
    public String addHome(){
        return "POST :: home";
    }

    @RequestMapping(value="/home", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteHome(){
        return "DELETE :: home";
    }

    @RequestMapping(value="/home", method = RequestMethod.PATCH)
    @ResponseBody
    public String patchHome(){
        return "PATCH :: home";
    }

    @RequestMapping(value="/home", method = RequestMethod.PUT)
    @ResponseBody
    public String putHome(){
        return "PUT :: home";
    }

    @RequestMapping(value="/home", method = RequestMethod.HEAD)
    @ResponseBody
    public String getHeader(){
        return "HEAD :: head";
    }

}
