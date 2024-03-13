function QuizHint({displayMeaning, meaning} : {displayMeaning: boolean, meaning: string}) {
    return (
        <>
            {displayMeaning ? <p>We are looking for a phrase that means: <strong>{meaning}</strong> </p> : <></>}
        </>
    )
}

export { QuizHint }