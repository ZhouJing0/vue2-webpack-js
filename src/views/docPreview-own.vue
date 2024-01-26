<!--
 * @Author: zhoujing zj15224306878@163.com
 * @Date: 2024-01-04 17:41:17
 * @LastEditors: zhoujing zj15224306878@163.com
 * @LastEditTime: 2024-01-04 18:45:18
 * @FilePath: /vue2-webpack-js/src/views/docPreview.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- onlyoffice展示 -->
    <div class='qualityManual-container'>
        <div class='qualityManual-container-office'>
            <vab-only-office id="office-preview" :documentServerUrl='documentServerUrl' :config="config" />
        </div>
    </div>
 
</template>
<script>
    import vabOnlyOffice from './docPre/index.vue'
 
    export default {
        components: { vabOnlyOffice },
        data() {
            return {
                documentServerUrl: "http://192.168.1.25:8090/",
                config: {
                    document: {
                        fileType: "docx",
                        // key: "Khirz6zTPdfd7",
                        key: "my_jwt_secret",
                        title: "Example Document Title.docx",
                        url: "http://192.168.1.25:8090/example/editor?type=desktop&mode=view&fileName=2023%E5%B9%B4%E5%85%A8%E5%B9%B4%E9%A1%B9%E7%9B%AE%E5%AE%8C%E6%88%90%E6%83%85%E5%86%B5%E8%A1%A8-2024%E5%B9%B401%E6%9C%8803%E6%97%A5.xlsx&userid=uid-0&lang=zh&directUrl=false"
                    },
                    permissions: {
                      edit: false,
                      download: true,
                    },
                    documentType: "word",
                    // editorConfig: {
                    //     callbackUrl: "https://example.com/url-to-callback.ashx"
                    // }
                }
            }
        },
        methods: {
            //这里的val是传递的参数
            loadOnlyOffice(val) {
                this.option.key =        // key 默认置空则不走缓存
                this.option.title = ''   // 该文件名在下载文档时也将用作文件名
                this.option.url =        // 定义存储原始查看或编辑的文档的绝对URL
                this.option.fileType = 'docx'                // 文件类型
                this.option.callbackUrl = ''                  // 回调地址
                this.show = true                        // 打开onlyOffice窗口
                console.log(val, '编辑word默认配置参数')
            },
        }
    }
</script>
 
<style rel="stylesheet/less" lang="less">
    .qualityManual-container {
        padding: 0 !important;
        width: 100%;
        height: calc(100vh - 180px);
    }
 
    .qualityManual-container-office {
        width: 100%;
        height: calc(100% - 55px);
    }
 
</style>