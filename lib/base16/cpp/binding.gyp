{
  "targets": [
    {
      "target_name": "base16",
      "sources": [ "base16.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
