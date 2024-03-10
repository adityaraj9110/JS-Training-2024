type RulesType<T> = {
    value: T,
    message: string
}


export function validationRules<T>({ value, message }: RulesType<T>): RulesType<T> {
    return { value, message };
}

