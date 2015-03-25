{
  "targets": [
    {
      "target_name": "base10",
      "sources": [ "base10.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
