export default defineI18nConfig(
    () => ( {
        legacy: false,
        locale: 'jp',
        messages: {
            jp: {
                dataset: 'データセット',
                manageDatasets: 'データセットを管理する',
                tabularData: 'タブラリーテギータ',
                imageData: 'イメージデータ',
                textData: 'テキストデータ',
                action: 'アクション',
                uploadDataset: 'データセットをアップロード',
                searchByFilename: 'ファイル名で検索する',
                datasetName: 'データセット名',
                numOfColsAndRows: '行数X列数',
                createdAt: '作成日',
                updatedAt: '更新日',
                status: 'ステータス',
            },
            en: {
                dataset: 'Dataset',
                manageDatasets: 'Manage Datasets',
                tabularData: 'Tabular Data',
                imageData: 'Image Data',
                textData: 'Text Data',
                action: 'Action',
                uploadDataset: 'Upload dataset',
                searchByFilename: 'Search by filename',
                datasetName: 'Dataset name',
                numOfColsAndRows: 'ColsNRows',
                createdAt: 'Created At',
                updatedAt: 'Updated At',
                status: 'Status',
            }
        }
    } )
)