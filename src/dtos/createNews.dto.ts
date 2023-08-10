import z from 'zod'


export interface createNewsInputDTO {
    id: string,
    title: string,
    description: string,
    author: string
}


export const createNewsSchema = z.object(
    {
        id: z.string(
            { required_error: "O 'id' é obrigatório.", invalid_type_error: "O 'id' deve ser do tipo string." }
        ).min(
            4, { message: "O 'id' deve ter no mínimo 4 caracters" }
        ).max(
            4, { message: "O 'id' deve ter no máximo 4 caracters" }
        ),
        title: z.string(
            { required_error: "O 'title' é obrigatório.", invalid_type_error: "O 'title' deve ser do tipo string." }
        ),
        description: z.string(
            { required_error: "A 'description' é obrigatório.", invalid_type_error: "A 'description' deve ser do tipo string." }
        ),
        author: z.string(
            { required_error: "O 'author' é obrigatório.", invalid_type_error: "O 'author' deve ser do tipo string." }
        ).min(
            4, { message: "O 'author' deve ter no mínimo 4 caracters" }
        ).max(
            4, { message: "O 'author' deve ter no máximo 4 caracters" }
        ),

    }
).transform(data => data as createNewsInputDTO) 