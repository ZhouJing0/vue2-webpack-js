<template>
  <div>
    <PdfView></PdfView>
  </div>
</template>

<script>
import PdfView from "@/components/system/PdfView";
export default {
  components: { PdfView },
  data() {
    return {
      data: [
        {
          name: "Category A",
          value: 10,
          children: [
            {
              name: "Subcategory A1",
              value: 3,
              children: [
                {
                  name: "Item A11",
                  value: 1,
                },
                {
                  name: "Item A12",
                  value: 2,
                },
              ],
            },
            {
              name: "Subcategory A2",
              value: 5,
              children: [
                {
                  name: "Item A21",
                  value: 3,
                },
                {
                  name: "Item A22",
                  value: 2,
                },
              ],
            },
          ],
        },
        {
          name: "Category B",
          value: 12,
          children: [
            {
              name: "Subcategory B1",
              value: 4,
              children: [
                {
                  name: "Item B11",
                  value: 2,
                },
                {
                  name: "Item B12",
                  value: 2,
                },
              ],
            },
            {
              name: "Subcategory B2",
              value: 6,
              children: [
                {
                  name: "Item B21",
                  value: 3,
                },
                {
                  name: "Item B22",
                  value: 3,
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
