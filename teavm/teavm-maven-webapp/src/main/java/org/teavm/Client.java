package org.teavm;

import java.io.IOException;

import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import net.sourceforge.plantuml.wasm.RunEmpty;
// import net.sourceforge.plantuml.wasm.Utils;


public class Client {
    public static void main(String[] args) {
        HTMLDocument document = HTMLDocument.current();
        HTMLElement div = document.createElement("div");
        try {
            RunEmpty.main(args);
            // Utils.convertPng("result.png", "@startuml\nBob -> Alice: Hi\n@enduml\n");
        } catch (IOException e) {
            System.out.println("IOException");
        }        
        div.appendChild(document.createTextNode("TeaVM generated element"));
        document.getBody().appendChild(div);
    }
}
