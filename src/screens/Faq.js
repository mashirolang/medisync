import { 
    Accordion, 
    AccordionItem, 
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import Bg from "../assets/img/bg.jpg";
import { useState } from 'react';

const faqItems = [
    {
        header: 'What is the purpose of life?',
        content: 'Mamayat'
    },
    {
        header: 'What is the purpose of life life?',
        content: 'The purpose of life is to die and lie'
    },
    {
        header: 'What is the purpose of life life lifeee?',
        content: 'The purpose of life is to die and lie'
    },
    {
        header: 'What is the purpose of life lifes?',
        content: 'The purpose of life is to die and lie'
    }
]

function Dropdown({ uuid, header, content, isCollapsed }) {
    return (
        <AccordionItem uuid={uuid} className='py-6 px-6 border-b-2 border-black-100 border-opacity-25'>
            <AccordionItemHeading>
                <AccordionItemButton className='flex flex-row justify-between font-semibold text-lg'>
                    {header}
                    <h2 className='text-2xl'>{!isCollapsed ? '+' : '-'}</h2>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='py-6 text-opacity-75'>
                <p>{content}</p>
            </AccordionItemPanel>
        </AccordionItem>   
    )
}

export default function Faq() {
    const styling = {
        backgroundImage: `linear-gradient(#252525ad, #252525ad), url("${Bg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
    };
    
    const [collapsedIds, setCollapsedIds] = useState([]);

    const dropdowns = faqItems.map((faq) => {
        // Use header as uuid (dont forget to remove space)
        const uuid = faq.header?.replace(/\s/gm, '');

        return (
            <Dropdown 
                key={faq.header}
                uuid={uuid} 
                header={faq.header} 
                content={faq.content}
                isCollapsed={collapsedIds.some(collapsedId => collapsedId === uuid)} 
            />
        )
})

    return (
        <div className="flex flex-col">
            <main
                className="min-h-[50vh] bg-cover bg-no-repeat bg-center relative pt-12"
                style={styling}
            >
                <div className="flex items-center justify-center h-[50vh] flex-col gap-2">
                    <h2 className="lg:text-5xl text-3xl font-bold text-white">
                        FAQ
                    </h2>
                    <div>
                        <p className="text-gray-300 lg:text-base text-sm">
                            FAQ | About MediSync
                        </p>
                    </div>
                </div>
            </main>
            <div className='flex flex-col w-full py-12 items-center'>
                <Accordion 
                    className='w-[70%] shadow-lg bg-black-100 max-sm:w-full' 
                    allowZeroExpanded 
                    allowMultipleExpanded
                    onChange={(activeSections) => setCollapsedIds(activeSections)}
                >
                    {dropdowns}
                </Accordion>
            </div>
        </div>
    )
}