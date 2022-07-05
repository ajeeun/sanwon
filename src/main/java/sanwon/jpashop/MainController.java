package sanwon.jpashop;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("main")
    public String hello(Model model){
        model.addAttribute("data","메인화면");
        return "main";

    }

    @GetMapping("mainTwo")
    public String main(Model model){
        model.addAttribute("data","메인화면2");
        return "mainTwo";

    }

    @GetMapping("assets")
    public String assets(){
        return "assets";

    }

}
