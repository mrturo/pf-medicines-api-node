DO $$
DECLARE
  local_user_id INT;
  local_mtyp_id INT;
  local_mtyp_ids INT[] := '{}';
  local_mman_id INT;
  local_mman_ids INT[] := '{}';
  local_msub_id INT;
  local_msub_ids INT[] := '{}';
  local_mbme_id INT;
  local_mbme_ids INT[] := '{}';
  local_mbpr_id INT;
  local_mbpr_ids INT[] := '{}';
  local_mcomp_id INT;
  local_mcomp_ids INT[] := '{}';
  local_mfre_id INT;
  local_mfre_ids INT[] := '{}';
  local_mpre_id INT;
  local_mpre_ids INT[] := '{}';
BEGIN

  -- PF_USER

  INSERT INTO public.pf_user (user_id, user_name)
    VALUES
      (
        nextval(
          'pf_user_user_id_seq' :: regclass
        ),
        'Arturo Andrés Mendoza Benavides'
      ) RETURNING user_id INTO local_user_id; -- local_user_id
    RAISE NOTICE 'Inserted into pf_user, user_id: %',
    local_user_id;


  -- PF_MED_MANUFACTURER

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'VITAMIN LIFE'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[1]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'ASCEND'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[2]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'SEVEN PHARMA'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[3]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'LABORATORIO CHILE'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[4]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'FARMACIA AHUMADA'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[5]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'LABORATORIO FNL'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[6]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'LABORATORIO ABEN LAB'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[7]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];

  INSERT INTO public.pf_med_manufacturer (mman_id, mman_name)
    VALUES
      (
        nextval(
          'pf_med_manufacturer_mman_id_seq' :: regclass
        ),
        'GSK'
      ) RETURNING mman_id INTO local_mman_id;
    local_mman_ids := array_append(local_mman_ids, local_mman_id); -- local_mman_ids[8]
    RAISE NOTICE 'Inserted into pf_med_manufacturer, mman_id: %',
    local_mman_ids[array_length(local_mman_ids, 1) ];


  -- PF_MED_SUBSTANCE

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'LACTOBACILLUS ACIDOPHILUS'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[1]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'BIFIDOBACTERIUM BIFIDUM'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[2]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'FOS-INULIN'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[3]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'FENNEL SEED'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[4]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'COLLAGEN'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[5]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN C'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[6]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN D'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[7]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'BETA CAROTENE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[8]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'BIOTIN'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[9]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'CHROMIUM'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[10]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'FOLIC ACID'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[11]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'IODINE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[12]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'KOREANINSENG'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[13]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'MAGNESIUM'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[14]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'MANGANESE SULFATE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[15]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'NIACINAMIDE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[16]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'PHOSPHORUS'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[17]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'SELENIUM'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[18]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN B1'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[19]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN B12'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[20]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN B2'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[21]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN B5'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[22]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN B6'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[23]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN D3'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[24]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN E'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[25]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN K1'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[26]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'ZINC'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[27]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'EZETIMIBA'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[28]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'ESCITALOPTRAM'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[29]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'ATORVASTATINA'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[30]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'MINOXIDIL'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[31]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'FINASTERIDE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[32]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'CREATINE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[33]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'FLUTICASONE FUROATE'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[34]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'VITAMIN A'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[35]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  INSERT INTO public.pf_med_substance (msub_id, msub_name)
    VALUES
      (
        nextval(
          'pf_med_substance_msub_id_seq' :: regclass
        ),
        'FISH OIL'
      ) RETURNING msub_id INTO local_msub_id;
    local_msub_ids := array_append(local_msub_ids, local_msub_id); -- local_msub_ids[36]
    RAISE NOTICE 'Inserted into pf_med_substance, msub_id: %',
    local_msub_ids[array_length(local_msub_ids, 1) ];

  -- PF_MED_TYPE

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'ATORVASTATINA'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[1]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'COLLAGEN'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[2]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'CORTICOSTEROID'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[3]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'CREATINE'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[4]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'ESCITALOPRAM'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[5]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'EZETIMIBA'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[6]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'HAIR GROWTH'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[7]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'MULTIVITAMIN'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[8]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'OMEGA-3'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[9]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'PROBIOTIC'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[10]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];

  INSERT INTO public.pf_med_type (mtyp_id, mtyp_name)
    VALUES
      (
        nextval(
          'pf_med_type_mtyp_id_seq' :: regclass
        ),
        'VITAMIN A'
      ) RETURNING mtyp_id INTO local_mtyp_id;
    local_mtyp_ids := array_append(local_mtyp_ids, local_mtyp_id); -- local_mtyp_ids[11]
    RAISE NOTICE 'Inserted into pf_med_type, mtyp_id: %',
    local_mtyp_ids[array_length(local_mtyp_ids, 1) ];


  -- PF_MED_BRANDED_MEDICINE

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'DAILY BIOTIC FIBER',
        local_mtyp_ids[10],
        local_mman_ids[1]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[1]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'COLLAGEN EXTRA',
        local_mtyp_ids[2],
        local_mman_ids[1]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[2]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'MEN''S DAILY ONE',
        local_mtyp_ids[8],
        local_mman_ids[1]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[3]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'ZERITOL',
        local_mtyp_ids[6],
        local_mman_ids[2]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[4]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'ESCITALOPRAM',
        local_mtyp_ids[5],
        local_mman_ids[3]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[5]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'ATORVASTATINA',
        local_mtyp_ids[1],
        local_mman_ids[4]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[6]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'HAIR GROWTH',
        local_mtyp_ids[7],
        local_mman_ids[5]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[7]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'POWDER CREATINA MONOHYDRATE',
        local_mtyp_ids[4],
        local_mman_ids[6]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[8]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'AVAMYS',
        local_mtyp_ids[3],
        local_mman_ids[8]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[9]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'SIMI SARDIN',
        local_mtyp_ids[9],
        local_mman_ids[7]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[10]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];

  INSERT INTO public.pf_med_branded_medicine (
      mbme_id, mbme_name, mtyp_id, mman_id
    )
    VALUES
      (
        nextval(
          'pf_med_branded_medicine_mbme_id_seq' :: regclass
        ),
        'A RETINOL',
        local_mtyp_ids[11],
        local_mman_ids[6]
      ) RETURNING mbme_id INTO local_mbme_id;
    local_mbme_ids := array_append(local_mbme_ids, local_mbme_id); -- local_mbme_ids[11]
    RAISE NOTICE 'Inserted into pf_med_branded_medicine, mbme_id: %',
    local_mbme_ids[array_length(local_mbme_ids, 1) ];


  -- PF_MED_BRANDED_PRESENTATION

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[1],
        60
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[1]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[2],
        120
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[2]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[3],
        100
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[3]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[4],
        28
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[4]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[5],
        30
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[5]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[6],
        30
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[6]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[7],
        30
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[7]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[8],
        60
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[8]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[9],
        120
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[9]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[10],
        90
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[10]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];

  INSERT INTO public.pf_med_branded_presentation (mbpr_id, mbme_id, mbpr_quantity)
    VALUES
      (
        nextval(
          'pf_med_branded_presentation_mbpr_id_seq' :: regclass
        ),
        local_mbme_ids[11],
        60
      ) RETURNING mbpr_id INTO local_mbpr_id;
    local_mbpr_ids := array_append(local_mbpr_ids, local_mbpr_id); -- local_mbpr_ids[11]
    RAISE NOTICE 'Inserted into pf_med_branded_presentation, mbpr_id: %',
    local_mbpr_ids[array_length(local_mbpr_ids, 1) ];


  -- PF_MED_COMPONENT

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.15,
        local_msub_ids[1],
        local_mbpr_ids[1]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[1]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.15,
        local_msub_ids[2],
        local_mbpr_ids[1]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[2]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.1,
        local_msub_ids[3],
        local_mbpr_ids[1]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[3]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.05,
        local_msub_ids[4],
        local_mbpr_ids[1]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[4]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        4,
        local_msub_ids[5],
        local_mbpr_ids[2]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[5]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.2,
        local_msub_ids[6],
        local_mbpr_ids[2]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[6]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.00002,
        local_msub_ids[7],
        local_mbpr_ids[2]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[7]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.15,
        local_msub_ids[6],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[8]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.0045,
        local_msub_ids[8],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[9]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.000125,
        local_msub_ids[9],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[10]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.000025,
        local_msub_ids[10],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[11]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.0002,
        local_msub_ids[11],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[12]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.000075,
        local_msub_ids[12],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[13]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.04,
        local_msub_ids[13],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[14]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.05,
        local_msub_ids[14],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[15]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.0025,
        local_msub_ids[15],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[16]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.015,
        local_msub_ids[16],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[17]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.106,
        local_msub_ids[17],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[18]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.00005,
        local_msub_ids[18],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[19]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.006,
        local_msub_ids[19],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[20]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.000012,
        local_msub_ids[20],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[21]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.006,
        local_msub_ids[21],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[22]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.015,
        local_msub_ids[22],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[23]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.015,
        local_msub_ids[23],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[24]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.0000025,
        local_msub_ids[24],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[25]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.033,
        local_msub_ids[25],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[26]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.000038,
        local_msub_ids[26],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[27]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.02,
        local_msub_ids[27],
        local_mbpr_ids[3]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[28]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.01,
        local_msub_ids[28],
        local_mbpr_ids[4]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[29]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.01,
        local_msub_ids[29],
        local_mbpr_ids[5]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[30]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.01,
        local_msub_ids[30],
        local_mbpr_ids[6]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[31]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.003,
        local_msub_ids[31],
        local_mbpr_ids[7]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[32]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.001,
        local_msub_ids[32],
        local_mbpr_ids[7]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[33]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.001,
        local_msub_ids[33],
        local_mbpr_ids[8]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[34]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.0000275,
        local_msub_ids[34],
        local_mbpr_ids[9]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[35]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        2.92,
        local_msub_ids[36],
        local_mbpr_ids[10]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[36]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];

  INSERT INTO public.pf_med_component (
      mcomp_id, mcomp_grams, msub_id, mbpr_id
    )
    VALUES
      (
        nextval(
          'pf_med_component_mcomp_id_seq' :: regclass
        ),
        0.001,
        local_msub_ids[35],
        local_mbpr_ids[11]
      ) RETURNING mcomp_id INTO local_mcomp_id;
    local_mcomp_ids := array_append(local_mcomp_ids, local_mcomp_id); -- local_mcomp_ids[37]
    RAISE NOTICE 'Inserted into pf_med_component, mcomp_id: %',
    local_mcomp_ids[array_length(local_mcomp_ids, 1) ];


  -- PF_MED_FRECUENCY

  INSERT INTO public.pf_med_frecuency (
      mfre_id, mfre_quantity, mfre_every_hours
    )
    VALUES
      (
        nextval(
          'pf_med_frecuency_mfre_id_seq' :: regclass
        ),
        1,
        24
      ) RETURNING mfre_id INTO local_mfre_id;
    local_mfre_ids := array_append(local_mfre_ids, local_mfre_id); -- local_mfre_ids[1]
    RAISE NOTICE 'Inserted into pf_med_frecuency, mfre_id: %',
    local_mfre_ids[array_length(local_mfre_ids, 1) ];

  INSERT INTO public.pf_med_frecuency (
      mfre_id, mfre_quantity, mfre_every_hours
    )
    VALUES
      (
        nextval(
          'pf_med_frecuency_mfre_id_seq' :: regclass
        ),
        2,
        24
      ) RETURNING mfre_id INTO local_mfre_id;
    local_mfre_ids := array_append(local_mfre_ids, local_mfre_id); -- local_mfre_ids[2]
    RAISE NOTICE 'Inserted into pf_med_frecuency, mfre_id: %',
    local_mfre_ids[array_length(local_mfre_ids, 1) ];

  INSERT INTO public.pf_med_frecuency (
      mfre_id, mfre_quantity, mfre_every_hours
    )
    VALUES
      (
        nextval(
          'pf_med_frecuency_mfre_id_seq' :: regclass
        ),
        4,
        24
      ) RETURNING mfre_id INTO local_mfre_id;
    local_mfre_ids := array_append(local_mfre_ids, local_mfre_id); -- local_mfre_ids[3]
    RAISE NOTICE 'Inserted into pf_med_frecuency, mfre_id: %',
    local_mfre_ids[array_length(local_mfre_ids, 1) ];


  -- PF_MED_PRESCRIPTION

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[10],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[1]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[2],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[2]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[8],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[3]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[1],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[4]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[5],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[5]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[6],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[6]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[7],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[7]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[4],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[8]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[3],
        local_mfre_ids[3],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[9]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[9],
        local_mfre_ids[2],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[10]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];

  INSERT INTO public.pf_med_prescription (
      mpre_id, mtyp_id, mfre_id, mpre_active,
      mpre_is_self_medicated, mpre_date,
      user_id
    )
    VALUES
      (
        nextval(
          'pf_med_prescription_mpre_id_seq' :: regclass
        ),
        local_mtyp_ids[11],
        local_mfre_ids[1],
        true,
        true,
        CURRENT_TIMESTAMP,
        local_user_id
      ) RETURNING mpre_id INTO local_mpre_id;
    local_mpre_ids := array_append(local_mpre_ids, local_mpre_id); -- local_mpre_ids[11]
    RAISE NOTICE 'Inserted into pf_med_prescription, mpre_id: %',
    local_mpre_ids[array_length(local_mpre_ids, 1) ];


  -- PF_MED_STOCK

  INSERT INTO public.pf_med_stock (
      msto_id, msto_date, msto_quantity,
      mbpr_id, user_id
    )
    VALUES
      (
        nextval('pf_med_stock_msto_id_seq'::regclass),
        CURRENT_TIMESTAMP,
        100,
        local_mbpr_ids[1],
        local_user_id
      );


  -- PF_MED_PURCHASE

  INSERT INTO public.pf_med_purchase (
      mpur_id, mpur_date, mpur_discount,
      mpur_price, mpur_shipping_cost,
      mbpr_id, user_id
    )
    VALUES
      (
        nextval('pf_med_purchase_mpur_id_seq'::regclass),
        CURRENT_TIMESTAMP,
        20,
        100,
        5,
        local_mbpr_ids[1],
        1
      );


END $$;
COMMIT;
