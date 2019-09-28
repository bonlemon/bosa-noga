export const toCamelCase = (type) => {
    return type
        .split('_')
        .map((word, index) => (index !== 0 ? word[0] + word.slice(1).toLocaleLowerCase() : word.toLocaleLowerCase()))
        .join('');
};
