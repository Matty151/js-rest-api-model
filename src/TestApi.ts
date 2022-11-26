export default class TestApi {
    static fetch(url: string) {
        let result = null;

        switch (url) {
            case 'api/posts':
                result = [
                    {
                        id: 1,
                        title: 'Post #1',
                    },
                    {
                        id: 2,
                        title: 'Post #2',
                    },
                ];

                break;
            case 'api/posts/1/comments':
                result = [
                    {
                        id: 1,
                        post_id: 1,
                        body: 'Comment #1 on post #1.',
                    },
                    {
                        id: 2,
                        post_id: 1,
                        body: 'Comment #2 on post #1.',
                    },
                ];

                break;
        }

        return result;
    }
}
