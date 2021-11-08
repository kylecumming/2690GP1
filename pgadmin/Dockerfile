FROM dpage/pgadmin4:latest
ADD file:dc8af9c7bfe9f9541e1db38dea01c4201609f3075b31e108f2073ffed8c5e4b9 in / 
CMD ["/bin/sh"]
COPY dir:75d79c4aa2207e81acc1ce63fa3b82bd6f03931c4acd8834b8e9868a3dfde00f in /venv 
COPY dir:fb551f997895cafde14686ad2fabccc03fcfe7cca6b9d1a9d0e8c0128b28937b in /usr/local/ 
COPY file:5d10ca8d8ee540bed150760923799776fe7d5958d52eb2027556e9071d389961 in /usr/lib/ 
/bin/sh -c ln -s libpq.so.5.14 /usr/lib/libpq.so.5 &&     ln -s libpq.so.5.14 /usr/lib/libpq.so
WORKDIR /pgadmin4
ENV PYTHONPATH=/pgadmin4
COPY dir:ccac1d4ace6e1e3b3a897ff9ad9ec92e3bc9b5fab1dbd43f9af24751d9348f0b in /pgadmin4 
COPY dir:cada0c51150f15c491cb946908952e46e609f59984773ad746784348e0a44597 in /pgadmin4/docs 
COPY file:5ebf4d28cb7136b5aae1a8b57ba3ee695bf1740de4ce2ea6aca73c0a35325eef in /pgadmin4 
COPY file:4d853d0332df49a0c2b619cf2e5570784a298bc8ed116271067ef526635627de in /pgadmin4 
COPY file:8fd7a281bb106a7035adec2cb31bb95c37e94ec8f3af3a8c0f6b99fae0b9a16e in /entrypoint.sh 
COPY file:0dcecf9a4a2ffa1cc492d7bcbbc0140d683ea6a7e886f162d86d96b8c754a664 in /pgadmin4/LICENSE 
COPY file:08f733d77d9d135390e3912f7f8d38ba85b4e90517e6714c6d8c67a324bf79f4 in /pgadmin4/DEPENDENCIES 
/bin/sh -c apk add         python3         py3-pip         postfix         krb5-libs         shadow         sudo         libedit         libcap &&     /venv/bin/python3 -m pip install --no-cache-dir gunicorn &&     find / -type d -name '__pycache__' -exec rm -rf {} + &&     groupadd -g 5050 pgadmin &&     useradd -r -u 5050 -g pgadmin pgadmin &&     mkdir -p /var/lib/pgadmin &&     chown pgadmin:pgadmin /var/lib/pgadmin &&     touch /pgadmin4/config_distro.py &&     chown pgadmin:pgadmin /pgadmin4/config_distro.py &&     setcap CAP_NET_BIND_SERVICE=+eip /usr/bin/python3.9 &&     echo "pgadmin ALL = NOPASSWD: /usr/sbin/postfix start" > /etc/sudoers.d/postfix
USER pgadmin
VOLUME [/var/lib/pgadmin]
EXPOSE 4033
ENTRYPOINT ["/entrypoint.sh"]