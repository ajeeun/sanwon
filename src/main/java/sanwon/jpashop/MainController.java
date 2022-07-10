package sanwon.jpashop;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("main")
    public String hello(){
        return "main";

    }

    @GetMapping("mainTwo")
    public String main(Model model){
        return "mainTwo";

    }

    @GetMapping("assets")
    public String assets(){
        return "assets";

    }

}
