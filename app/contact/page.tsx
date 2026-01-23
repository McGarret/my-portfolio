"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Téléphone',
        description: '(+228) 90 30 21 11 / 97 90 87 13'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'benakossou@outlook.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Adresse',
        description: 'Agoè Sogbossito, non loin du marché Gnamassigan'
    },
];

import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';


const Contact = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        // Add the select value manually since Radix Select doesn't use a native select
        formData.append("service", service);
        // Important: Replace with your actual Access Key from Web3Forms
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Message envoyé !",
                    description: "Merci Benjamin, votre message a été envoyé avec succès.",
                });
                (e.target as HTMLFormElement).reset();
                setService("");
            } else {
                toast({
                    variant: "destructive",
                    title: "Erreur",
                    description: "Une erreur est survenue lors de l'envoi du message.",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Impossible de se connecter au service d'envoi.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                            <h3 className='text-4xl text-accent'>Travaillons ensemble</h3>
                            <p className='text-white/60'>
                                Je suis à votre écoute pour discuter de vos projets de développement web, mobiles ou de vos besoins en digitalisation.
                            </p>
                            {/* input */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="text" name="firstname" placeholder="Prénom" required />
                                <Input type="text" name="lastname" placeholder="Nom" required />
                                <Input type="email" name="email" placeholder="Adresse e-mail" required />
                                <Input type="tel" name="phone" placeholder="Numéro de téléphone" />
                            </div>
                            {/* select */}
                            <Select onValueChange={(value) => setService(value)} value={service}>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder="Sélectionnez un service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sélectionnez un service</SelectLabel>
                                        <SelectItem value='web'>Développement Web</SelectItem>
                                        <SelectItem value='saas'>Solutions SaaS & Business</SelectItem>
                                        <SelectItem value='uiux'>UI/UX & Design Graphique</SelectItem>
                                        <SelectItem value='mobile'>Développement Mobile</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                name="message"
                                className='h-[200px]'
                                placeholder='Tapez votre message ici.'
                                required
                            />
                            {/* btn */}
                            <Button size="md" className='max-w-40' disabled={loading}>
                                {loading ? "Envoi..." : "Envoyer"}
                            </Button>
                        </form>
                    </div>

                    <div className='flex-1 flex items-center xl:justify-end order-1
                        xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return <li key={index} className='flex items-center gap-6'>
                                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] 
                                    text-accent rounded-md flex items-center justify-center'>
                                        <div className='text-[28px]'>{item.icon}</div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/60'>{item.title}</p>
                                        <h3 className='text-xl'>{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </motion.section>
    );
}

export default Contact