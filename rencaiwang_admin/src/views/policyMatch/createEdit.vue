<template />

<script>
    import text from './layouts/text.js'
  export default {
        components: {},
        data() {
          return {
            questionDiag: true,
            ruleForm: {},
            formAction: '/admin/policyMatch/create',
            data: this.formatData(this),
            siteName: this.getSiteName(),
            text: text,
            questions: [],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          }
        }
  }
</script>

<style>
</style>
