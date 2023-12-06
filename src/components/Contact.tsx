import { useState } from "react";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "./little/Button"
import CardContact from "./little/CardContact"
import FormContact from "./little/FormContact"
import { DataContact } from "../data/DataContact"

// import { submitForm } from "../api/api";

interface Props {
    id: string
}

interface MessageMe {
    senderName: string,
    senderEmail: string,
    senderMessage: string,
    senderTime: string,
}

const Contact = (props: Props) => {

    const [formData, setFormData] = useState<MessageMe>({
        senderName: '',
        senderEmail: '',
        senderMessage: '',
        senderTime: moment(new Date()).locale('id').format('LLLL')
    })

    // const [formData, setFormData] = useState('')

    const AlertSucces = () => {
        Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success"
        })
    }

    const AlertError = () => {
        Swal.fire({
            title: "Warning",
            text: "Please fill in all columns!",
            icon: "warning"
        })
    }
    const handleChange = (name: string, value: string) => {
        setFormData(formData => ({ ...formData, [name]: value }))
    }
    // console.log(formData)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.senderName === '' || formData.senderEmail === '' || formData.senderMessage === '') {
            AlertError()
        }
        else {
            try {
                const response = await axios.post('https://v1.nocodeapi.com/ardhyaar10/google_sheets/OSlnAsFoJUxGwQfS?tabId=Page1',
                    [[formData.senderName, formData.senderEmail, formData.senderMessage, formData.senderTime]], {
                });
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error);
            }
            AlertSucces()
            console.log(formData)
            setFormData({
                senderName: '',
                senderEmail: '',
                senderMessage: '',
                senderTime: moment(new Date()).locale('id').format('LLLL'),
            })
        }
    }

    return (
        <div className="min-h-screen pt-20" id={props.id}>
            <div className="text-2xl md:text-4xl font-bold text-center text-gray-300">
                <u>Contact</u> 🤙
                <br />
                <div className="text-start text-xl md:text-2xl mt-10">You can reach me through:</div>
            </div>
            <div className="md:flex mt-10 md:space-x-10">
                <div
                    data-aos="zoom-in-up"
                    data-aos-ease="ease-in-sine"
                    data-aos-duration="1500"
                    className="w-full md:w-1/2 p-5 "
                >
                    <div className="md:flex md:space-x-6 w-full text-zinc-200 ">
                        <div className="w-full md:w-1/2">
                            <div>Email 📧</div>
                            <div className="text-lg font-bold mt-2">
                                <a href="mailto:ardiansyahdodii890@gmail.com" target="_blank">
                                    ardiansyahdodii890@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mt-3 md:mt-0">
                            <div>Phone ID</div>
                            <div className="text-lg font-bold mt-2 w-full">
                                <a href="https://wa.me/6282121908675" target="_blank">
                                    +62 821 2190 8675
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        {DataContact.map((contact) => (
                            <CardContact key={contact.id} name={contact.name} icon={contact.icon} link={contact.link} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center py-5">
                    <div className="h-1 w-full md:w-1 md:h-[440px] mx-5 md:mx-0 bg-black"></div>
                    <div className="absolute text-lg md:text-xl font-semibold text-zinc-200 bg-slate-900">OR</div>
                </div>
                {/* Form */}
                <div
                    data-aos="zoom-in-up"
                    data-aos-ease="ease-in-sine"
                    data-aos-duration="1500"
                    className="w-full md:w-1/2 p-5"
                >
                    <form onSubmit={handleSubmit}>
                        <FormContact.FormContactInput
                            label="Name"
                            name="senderName"
                            type="text"
                            value={formData.senderName}
                            onChange={handleChange}
                            placeholder="Your Name"
                            classname={{ input: "h-14" }}
                        />
                        <FormContact.FormContactInput
                            label="Email"
                            name="senderEmail"
                            type="email"
                            value={formData.senderEmail}
                            onChange={handleChange}
                            placeholder="Your Email"
                            classname={{ label: "mt-5", input: "h-14" }}
                        />
                        <FormContact.FormContactTextArea
                            label="Message"
                            name="senderMessage"
                            type="text"
                            value={formData.senderMessage}
                            onChange={handleChange}
                            placeholder="Your Message"
                        />
                        <div>
                            <Button text="Submit" type="submit" classname="mt-5 hover:scale-110 transition-all duration-500" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact