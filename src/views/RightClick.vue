<template>
  <el-table :data="data" :tree-props="{ children: 'children' }">
    <el-table-column prop="key" label="Key"></el-table-column>
    <el-table-column label="Value">
      <template slot-scope="scope">
        <el-input v-model="scope.row.value" />
      </template>
    </el-table-column>
    <el-table-column label="Total" :width="100">
      <template slot-scope="scope">
        {{ calculateTotal(scope.$row, "value") }}
      </template>
    </el-table-column>
    <template slot="footer">
      <el-table-footer-row>
        <el-table-cell colspan="2">
          Total: {{ calculateTotal(data, "value") }}
        </el-table-cell>
      </el-table-footer-row>
    </template>
  </el-table>
</template>

<script>
export default {
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
  methods: {
    calculateTotal(rows, prop) {
      let total = 0;
      if (rows instanceof Array) {
        rows.forEach((row) => {
          total += this.calculateTotal(row, prop);
        });
      } else {
        if (rows && rows[prop] !== undefined) {
          total += Number(rows[prop]);
        }
        if (rows && rows.children !== undefined && rows.children.length > 0) {
          rows.children.forEach((child) => {
            total += this.calculateTotal(child, prop);
          });
        }
      }
      return total;
    },
  },
  // computed: {
  //   total() {
  //     let total = 0;
  //     for (let i = 0; i < this.tableData.length; i++) {
  //       total += this.calculateTotal(this.tableData[i]);
  //     }
  //     return total;
  //   },
  //   tableDataWithTotal() {
  //     const tableData = this.tableData.slice();
  //     tableData.push({
  //       name: "Total",
  //       value: this.total,
  //       total: this.total,
  //     });
  //     return tableData;
  //   },
  // },
};
</script>
