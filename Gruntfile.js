/**
 * configuration for grunt tasks
 * @module Gruntfile
 */

module.exports = function(grunt) {
  /** load tasks */
  require('load-grunt-tasks')(grunt);

  /* # # # # # # # # # # # # # # # # # # # # */
  /* # # # # # # # # # # # # # # # # # # # # */
  /* # # # # # # # # # # # # # # # # # # # # */
  /* # # # # # # # # # # # # # # # # # # # # */

  /** config for grunt tasks */
  var taskConfig = {

    fileConfig: require('./fileConfig'),

    awsConfig: require('./awsConfig'),

    aws_s3: {
      options: {
        accessKeyId: '<%= awsConfig.AWSAccessKeyId %>',
        secretAccessKey: '<%= awsConfig.AWSSecretKey %>',
        region: 'us-west-2',
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },


      uploadPublic: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          differential: true
        },
          params: {
            ContentEncoding: 'gzip'
          },
        files: [
          // {dest: 'app/', cwd: 'assets/', action: 'download'},
          {expand: true, cwd: '<%= fileConfig.localPublicPath %>', src: ['**'], dest: '<%= fileConfig.uploadPublicPath %>', stream: true, params: {CacheControl: '2000'}},
          // {expand: true, cwd: 'assets/', src: ['**'], dest: 'app/styles/'},
          // {dest: 'src/app', action: 'delete'},
        ]
      },


      uploadPrivate: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          differential: true,
          access: 'private'
        },
          params: {
            ContentEncoding: 'gzip'
          },
        files: [
          {expand: true, cwd: '<%= fileConfig.localPrivatePath %>', src: ['**'], dest: '<%= fileConfig.uploadPrivatePath %>', stream: true, params: {CacheControl: '2000'}},
        ]
      },


      uploadPublicDebug: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          differential: true,
          debug: true
        },
          params: {
            ContentEncoding: 'gzip'
          },
        files: [
          {expand: true, cwd: '<%= fileConfig.localPublicPath %>', src: ['**'], dest: '<%= fileConfig.uploadPublicPath %>', stream: true, params: {CacheControl: '2000'}}
        ]
      },


      uploadPrivateDebug: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          differential: true,
          access: 'private',
          debug: true
        },
          params: {
            ContentEncoding: 'gzip'
          },
        files: [
          {expand: true, cwd: '<%= fileConfig.localPrivatePath %>', src: ['**'], dest: '<%= fileConfig.uploadPrivatePath %>', stream: true, params: {CacheControl: '2000'}}
        ]
      },


      deletePublic: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
        },
        files: [
          {dest: '<%= fileConfig.uploadPublicPath %>', exclude: "**", flipExclude: true, action: 'delete'}
        ]
      },


      deletePrivate: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
        },
        files: [
          {dest: '<%= fileConfig.uploadPrivatePath %>', exclude: "**", flipExclude: true, action: 'delete'}
        ]
      },


      deletePublicDebug: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          debug: true
        },
        files: [
          {dest: '<%= fileConfig.uploadPublicPath %>', exclude: "**", flipExclude: true, action: 'delete'}
        ]
      },


      deletePrivateDebug: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          debug: true
        },
        files: [
          {dest: '<%= fileConfig.uploadPrivatePath %>', exclude: "**", flipExclude: true, action: 'delete'}
        ]
      },


      downloadPublic: {
        options: {
          bucket: '<%= awsConfig.Bucket %>'
        },
        files: [
          {dest: '<%= fileConfig.uploadPublicPath %>', cwd: '<%= fileConfig.downloadPublicPath %>', action: 'download'}
        ]
      },


      downloadPrivate: {
        options: {
          bucket: '<%= awsConfig.Bucket %>'
        },
        files: [
          {dest: '<%= fileConfig.uploadPrivatePath %>', cwd: '<%= fileConfig.downloadPrivatePath %>', action: 'download'}
        ]
      },


      downloadPublicDebug: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          debug: true
        },
        files: [
          {dest: '<%= fileConfig.uploadPublicPath %>', cwd: '<%= fileConfig.downloadPublicPath %>', action: 'download'}
        ]
      },


      downloadPrivateDebug: {
        options: {
          bucket: '<%= awsConfig.Bucket %>',
          debug: true
        },
        files: [
          {dest: '<%= fileConfig.uploadPrivatePath %>', cwd: '<%= fileConfig.downloadPrivatePath %>', action: 'download'}
        ]
      },
    }

  };

  /* # # # # # # # # # # # # # # # # # # # # */
  /* # # # # # # # # # # # # # # # # # # # # */
  /* # # # # # # # # # # # # # # # # # # # # */
  /* # # # # # # # # # # # # # # # # # # # # */

  // register default & custom tasks

  grunt.initConfig(taskConfig);

  grunt.registerTask('default', [

  ]);
};