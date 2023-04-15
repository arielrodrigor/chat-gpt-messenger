import openai from './chatgpt';

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion(
        {
            model,
            prompt,
            temperature: 0.5,
            top_p: 0.9,
            max_tokens: 200,
            frequency_penalty: 0.8,
            presence_penalty: 0.8,
        }
    ).then((res) => {
        return res.data.choices[0].text;
    }).catch((err) => {
        return `ChatGPT was unable to find an answer for that! (Error: ${err.message})`;
    });

    return res;
};

export default query;