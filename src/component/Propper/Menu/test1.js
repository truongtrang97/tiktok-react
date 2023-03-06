const a = [
    {
        data: [
            {
                icon: <FontAwesomeIcon icon={faEarthAsia} />,
                title: 'English',
                children: {
                    title: 'Language',
                    data: [
                        {
                            code: 'en',
                            title: 'English',
                        },
                        {
                            code: 'vi',
                            title: 'Tiếng Việt ',
                        },
                    ],
                },
            },
            {
                icon: <FontAwesomeIcon icon={faCircleQuestion} />,
                title: 'Feedback and help',
                to: '/feedback',
            },
            {
                icon: <FontAwesomeIcon icon={faKeyboard} />,
                title: 'Keyboard shortcuts',
            },
        ],
    },

    {
        title: 'Language',
        data: [
            {
                code: 'en',
                title: 'English',
            },
            {
                code: 'vi',
                title: 'Tiếng Việt ',
            },
        ],
    },
];
