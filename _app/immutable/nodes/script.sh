for f in *.js; do
    [ -e "$f" ] || continue
    echo "<link rel=\"modulepreload\" href=\"DLiteSoftware/_app/immutable/chunks/$f\">"
done
