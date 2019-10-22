<?php
  $REDIRECT_INFO_FILE_URI='https://oka-technology.github.io/dhfes2019/redirect-info/index.json';

  $json = mb_convert_encoding(file_get_contents($REDIRECT_INFO_FILE_URI), 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
  $data = json_decode($json);

  http_response_code($data->status);
  header("Location: {$data->url}");
