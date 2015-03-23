{
  "targets": [
    {
      "target_name": "base2",
      "sources": [ "base2.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
