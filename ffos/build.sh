rm app.zip \
&& cd ../app \
&& zip -r ../ffos/app.zip . -x@../ffos/excluded.lst \
&& cd ../ffos
