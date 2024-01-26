<template>
    <DocumentEditor 
        id="docEditor" 
        documentServerUrl="http://192.168.1.25:8090/"
        :config="config"
        :events_onDocumentReady="onDocumentReady"
    /> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DocumentEditor } from "@onlyoffice/document-editor-vue";

export default defineComponent({
    name: 'ExampleComponent',
    components: {
        DocumentEditor
    },
    data() {
        return {
            config: {
                    document: {
                        fileType: "docx",
                        key: "Khirz6zTPdfd7",
                        // key: "my_jwt_secret",
                        title: "Example Document Title.docx",
                        url: "http://192.168.1.25:8090/example/editor?type=desktop&mode=view&fileName=2023%E5%B9%B4%E5%85%A8%E5%B9%B4%E9%A1%B9%E7%9B%AE%E5%AE%8C%E6%88%90%E6%83%85%E5%86%B5%E8%A1%A8-2024%E5%B9%B401%E6%9C%8803%E6%97%A5.xlsx&userid=uid-0&lang=zh&directUrl=false"
                    },
                    permissions: {
                      edit: true,
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
        onDocumentReady() {
            console.log("Document is loaded");
        }
    },
});
</script>