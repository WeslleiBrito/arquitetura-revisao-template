import  z  from "zod"

export interface editNewsInputDTO {
    idNews: string,
    title?: string,
    description?: string
}


export const editNewsSchema = z.object({
    idNews: z.string(
        { required_error: "O 'id' é obrigatório.", invalid_type_error: "O 'id' deve ser do tipo string." }
    ).min(
        4, { message: "O 'id' deve ter no mínimo 4 caracters" }
    ).max(
        4, { message: "O 'id' deve ter no máximo 4 caracters" }
    ).startsWith(
        "n", {message: "O 'id' da notícia deve iniciar com a letra 'n'."}
    ),
    title: z.string(
        { invalid_type_error: "O 'title' deve ser do tipo string." }
    ).optional(),
    description: z.string(
        { invalid_type_error: "A 'description' deve ser do tipo string." }
    ).optional()
}).transform(data => data as editNewsInputDTO)