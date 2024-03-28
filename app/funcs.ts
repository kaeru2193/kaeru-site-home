export async function FetchData(url: string) { 
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("データの取得に失敗しました");
        }
        
        const data: any = await res.text();

        return data
    } catch (error) {
        console.error(error);
        throw error
    }
};