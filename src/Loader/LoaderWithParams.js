export const LoaderWithParams = async ({ params }) => {
    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
}