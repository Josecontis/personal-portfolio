import React, { Component } from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import { Container, Input, Text } from "./contacts.styles";
import CustomAlert from "./Alert/alert.component";

document.title = "Contatti | Giuseppe Conticchio";

class Contacts extends Component {
    constructor() {
        //costruttore di App
        super(); //costruttore di component
        this.sendEmail = this.sendEmail.bind(this);
        //identifica lo stato del vettore che cambia a causa di aggiornamenti
        this.state = {
            emailFlag: false, // modifico contenuto variabile di istanza state
            nameFlag: false,
            txtFlag: false,
            testFlag: 0,
        };
    }

    sendEmail(e) {
        e.preventDefault();

        let templateParams = {
            from_name: document.getElementById("name").value,
            subject: document.getElementById("subject").value,
            to_name: "peppeco98@gmail.com",
            message_html: document.getElementById("message").value,
            from_email: document.getElementById("email").value,
            reply_to: document.getElementById("email").value,
        };

        if (templateParams.from_email === "") this.setState({ testFlag: -1 });
        else {
            this.setState({ testFlag: 1 });
            emailjs.send(
                "service_dx9tuej",
                "template_03o7ni1",
                templateParams,
                "user_a25h2t1IePEbQPptKN2TZ"
            );
        }
    }

    render() {
        const emailConstraints = (content) => {
            if (content.target.value === "") this.setState({ emailFlag: false });
            //setta dinamicamente l'attivazione del bottone
            else this.setState({ emailFlag: true });
        };
        const nameConstraints = (content) => {
            if (content.target.value === "") this.setState({ nameFlag: false });
            //setta dinamicamente l'attivazione del bottone
            else this.setState({ nameFlag: true });
        };
        const txtConstraints = (content) => {
            if (content.target.value === "") this.setState({ txtFlag: false });
            //setta dinamicamente l'attivazione del bottone
            else this.setState({ txtFlag: true });
        };

        return (
            <React.Fragment>
                <div>
                    {this.state.testFlag === 1 ? (
                        <CustomAlert Success={true} />
                    ) : this.state.testFlag === -1 ? (
                        <CustomAlert Success={false} />
                    ) : null}
                </div>
                    <Container>
                        <Input
                            placeholder="Nome"
                            type="text"
                            name="name"
                            id="name"
                            onChange={nameConstraints}
                        />
                        <Input
                            placeholder="Email"
                            type="text"
                            name="email"
                            id="email"
                            onChange={emailConstraints}
                        />
                        <Input
                            placeholder="Oggetto"
                            width="29vw"
                            type="text"
                            name="subject"
                            id="subject"
                        />
                        <Text
                            placeholder="Messaggio"
                            name="message"
                            id="message"
                            width="29vw"
                            rows="15"
                            onChange={txtConstraints}
                        ></Text>
                        <Button variant="primary" onClick={this.sendEmail} target="_blank">
                            &nbsp;Send E-mail
                        </Button>
                    </Container>
            </React.Fragment>
        );
    }
}
export default Contacts;
