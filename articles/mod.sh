for f in *; do
  mkdir ${f//.md/}
  touch ${f//.md/}/index.md
  cat $f > ${f//.md/}/index.md
done
