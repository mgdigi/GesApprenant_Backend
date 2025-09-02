export const translateZodErrors = (error) => {
    const translatedErrors = {};
    for (const key in error) {
        if (error[key]._errors && error[key]._errors.length > 0) {
            translatedErrors[key] = error[key]._errors.map((msg) => {
                if (msg.includes("Too small"))
                    return "Trop court : la longueur minimale est de 2 caractères";
                if (msg.includes("Required"))
                    return "Ce champ est obligatoire";
                return msg;
            });
        }
    }
    return translatedErrors;
};
