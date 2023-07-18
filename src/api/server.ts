const token = '244a679d5038e9c5d19c90d6a7af7936f368a2b144723a05'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://wedding-website-uvyr.onrender.com/api/songs`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'x-access-token': `${token}`
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://wedding-website-uvyr.onrender.com/api/songs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'x-access-token': `${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://wedding-website-uvyr.onrender.com/api/songs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string, data: any = {}) => {
        const response = await fetch(`https://wedding-website-uvyr.onrender.com/api/songs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return { songID: id, message: "Is Removed"};
    },
}