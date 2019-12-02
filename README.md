## Get a presigned URL and upload a file
```
curl -XGET localhost:3000/avatar/url/put | jq .url | xargs curl -X PUT -T picture.jpg -L 
```