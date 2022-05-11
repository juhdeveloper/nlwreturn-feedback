import bugImageUrl from '../../assets/bug.svg'
import emojiImageUrl from '../../assets/emoji.svg'
import ideaImageUrl from '../../assets/idea.svg'
import {useState} from 'react'
import { FeedbackTypeStep } from "../Steps/FeedbackTypeStep"
import { FeedbackContentStep } from '../Steps/FeedbackContentStep'



export const feedbackTypes = {
    BUG: {
        title:'Problema',
        image: {
            source: bugImageUrl,
            alt:'Imagem de um inseto',
        }
    },
    IDEA: {
        title:'Ideias',
        image: {
            source: ideaImageUrl,
            alt:'Imagem de uma lâmpada',
        }

    },
    OTHER:{
        title:'Outro',
        image: {
            source: emojiImageUrl,
            alt:'Imagem de um pensamento',
        }

    },
}
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    
    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (

        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
       

       {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> //Enviando function via props 

    ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        />
    )} 


        <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a></footer>
         </div>
       )
};