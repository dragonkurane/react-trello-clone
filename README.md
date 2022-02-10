# Workflow Visualization

## 前提事項

-   Node.js
-   Yarn or NPM

## ローカル環境の設定

1. パッケージのインストール（yran）

```
yarn install
```

2. アプリケーションの実行

```
yarn start
```

3. `http://localhost:3000`にアクセス

## Schema

```json
{
    "users": {
        "<--- userId --->": {
            "boards": {
                "<--- boardId --->": {
                    "lanes": [
                        {
                            "id": "<--- lane id --->",
                            "title": "TODO"
                        }
                    ],
                    "starred": true,
                    "title": "<--- Title --->"
                }
            }
        }
    }
}
```
